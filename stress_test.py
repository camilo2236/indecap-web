import asyncio
import aiohttp
import time

URL = "https://indecap.edu.co/programas/enfermeria"
CONCURRENT_USERS = 100  # Usuarios simulados al mismo tiempo
TOTAL_REQUESTS = 500    # Total de clics/visitas a enviar

async def send_request(session, req_id):
    start_time = time.time()
    try:
        async with session.get(URL) as response:
            latency = (time.time() - start_time) * 1000
            return response.status, latency
    except Exception as e:
        return "Error", 0

async def main():
    print(f"🚀 Iniciando Stress Test en {URL}")
    print(f"👥 Usuarios simultáneos: {CONCURRENT_USERS} | Peticiones totales: {TOTAL_REQUESTS}\n")
    
    # Limitar la concurrencia a los usuarios definidos
    semaphore = asyncio.Semaphore(CONCURRENT_USERS)
    
    async def worker(session, req_id):
        async with semaphore:
            return await send_request(session, req_id)

    start_test = time.time()
    
    async with aiohttp.ClientSession() as session:
        tasks = [worker(session, i) for i in range(TOTAL_REQUESTS)]
        results = await asyncio.gather(*tasks)
        
    end_test = time.time()
    
    # Procesar resultados
    statuses = [r[0] for r in results]
    latencies = [r[1] for r in results if r[0] != "Error"]
    
    success_count = statuses.count(200)
    error_count = len(statuses) - success_count
    avg_latency = sum(latencies) / len(latencies) if latencies else 0
    
    print("="*40)
    print("📊 RESULTADOS DEL STRESS TEST")
    print("="*40)
    print(f"✅ Peticiones Exitosas (200 OK): {success_count}")
    print(f"❌ Peticiones Fallidas/Errores: {error_count}")
    print(f"⏱️ Tiempo promedio de respuesta: {avg_latency:.2f} ms")
    print(f"⚡ Tiempo total del test: {end_test - start_test:.2f} segundos")
    print("="*40)

if __name__ == "__main__":
    asyncio.run(main())