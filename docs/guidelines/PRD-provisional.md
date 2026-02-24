# **Product Requirements Document (PRD): Padel Sport Club (PSC) Token & ICO Platform**

| Proyecto | Padel Sport Club (PSC) |
| :---- | :---- |
| **Versión** | 1.0 (Borrador Inicial) |
| **Fecha** | 2026-01-28 |

## 

## **1\. Resumen Ejecutivo y Visión**

**Padel Sport Club** busca crear un ecosistema que una deporte, tecnología y comunidad mediante un token de membresía. El objetivo inmediato es lanzar una plataforma de preventa (ICO) para captar financiación y construir comunidad, respaldada por alianzas con Zaraps Games (videojuego), Paddle Point (retail) y academias deportivas.

El producto técnico a entregar por Metlabs en esta fase es la **infraestructura del Token, la plataforma Web de Preventa y los Smart Contracts asociados**.

---

## **2\. Alcance del Proyecto (Scope)**

El alcance temporal estimado es de **2 meses**, dividido en dos grandes bloques:

### **2.1 Fase 1: Definición y Diseño (Semanas 1-4)**

* **Deck y UX/UI:** Diseño de Pitch Deck (prioridad inmediata) y Página web de presale.  
* **Tokenomics:** Definición final de distribución, *vesting*, *cliffs* y modelo económico.  
* **Documentación:** Redacción del Whitepaper (o Litepaper) y adaptación de narrativa para SEO.

### **2.2 Fase 2: Desarrollo y Despliegue (Mes 2\)**

* **Smart Contracts:** Desarrollo del token ERC-20/BEP-20 y contratos de preventa/vesting.  
* **Plataforma Web (Front & Back):** Desarrollo de la landing con integración de Web3 (wallet connect) y Web2 (On-ramp fiat).  
* **Infraestructura:** Despliegue en red BNB Chain y configuración de seguridad.

---

## **3\. Requerimientos Funcionales (Confirmados)**

### **3.1 El Token (PSC)**

* **Nombre:** Padel Sport Club.  
* **Ticker:** PSC.  
* **Blockchain:** BNB Chain (Binance Smart Chain) por costes y ecosistema.  
* **Estándar:** ERC-20 o BEP-20.  
* **Supply Total:** $1.000.000.000$ (Mil millones).  
* **Decimales:** 9 (Aunque se discutió 18, el borrador indica 9\. **A confirmar**).

### **3.2 Plataforma de Preventa (ICO)**

* **Landing Page:** Diseño orientado a la conversión ("Conversion first") explicando visión, partners y roadmap.  
* **Conexión de Wallet:** Soporte para Metamask y WalletConnect.  
* **Comprar token:** Capacidad de comprar PSC (Padel Sport Club) usando BNB/USDT (moneda base a definir en BSC).  
* **Compra con Fiat (On-Ramp):** Integración de pasarela para pagos con tarjeta/transferencia (ej. Moonpay). Debe generar una wallet automática o "Magic Link" para usuarios no-crypto (Custodia o Autocustodia simplificada).  
* **Gestión de Vesting:** El usuario debe poder ver sus tokens bloqueados y reclamarlos (Claim) según el calendario de liberación (Cliff \+ Vesting) definido.

### **3.3 Sistema de Membresía (Gamificación)**

* **Niveles:** El sistema debe reconocer la cantidad de tokens para asignar un nivel de membresía (ej. Bronce, Plata, Oro o nombres de golpes de pádel).  
* **Visualización:** El usuario debe poder visualizar su nivel actual en el dashboard de la plataforma.

---

## **4\. Requerimientos "En el Aire" (Riesgos y Definiciones Pendientes)**

*Esta sección es crítica. Son elementos mencionados en las reuniones o borradores que **no tienen definición técnica cerrada** o presentan incoherencias que bloquearán el desarrollo si no se resuelven.*

### **4.1 Incoherencia Crítica en Precios**

* **El problema:** El documento de Tokenomics indica Precio Privada: $0,25 y Precio Preventa: $0,05.  
* **Riesgo:** Esto implica que los inversores privados pagarían 5 veces más que el público general, lo cual es opuesto a la lógica de mercado estándar.  
* **Acción requerida:** Confirmar si es un error tipográfico. Lo habitual sería Privada \< Preventa.

### **4.2 Mecánica de Staking vs. "Real Yield"**

* **El problema:** Se promete que el staking dará recompensas basadas en "beneficios del club" (alquiler de pistas, ventas).  
* **Falta de definición:** ¿Cómo llega el dinero fiat (euros) del mundo físico al Smart Contract en la blockchain?  
  * ¿Habrá una recompra manual (Buyback) de tokens en el mercado para repartirlos?.  
  * ¿Se repartirán Stablecoins?  
* **Impacto:** Esto requiere una operativa legal y financiera compleja (OCA \- Otros Criptoactivos) que no se puede automatizar totalmente en un Smart Contract en la Fase 1 sin un oráculo o intervención manual.

### **4.3 Integración con Videojuego (Zaraps Games)**

* **El problema:** Se menciona el uso del token en el juego (skins, torneos).  
* **Fuera de Scope actual:** Metlabs desarrolla la ICO, no el videojuego. No existe documentación de la API de Zaraps Games para conectar la wallet del usuario con la base de datos del juego.  
* **Acción:** Definir si esta integración es para la Fase 1 o futura. Actualmente, es **vaporware** técnico.

### **4.4 Tokenización de Activos Reales (RWA)**

* **Estado:** Mencionado como "Fase 3" o futuro.  
* **Acción:** Marcar explícitamente como **Fuera del Alcance (Out of Scope)** para el desarrollo actual para evitar "feature creep".

### **4.5 Clasificación Legal (Utility vs Security/OCA)**

* **El problema:** Se inicia como Utility pero se promete transición a OCA (reparto de dividendos/beneficios).  
* **Riesgo:** Si el marketing promete beneficios futuros ("profit sharing") durante la preventa, podría ser clasificado como Security prematuramente por reguladores.  
* **Acción:** Validación estricta de los textos de la Landing por parte de CYSAE antes de publicar.

---

## **5\. Tokenomics (Borrador a validar)**

Se requiere reunión específica para cerrar estos números.

* **Hard Cap:** 1.000.000 € \- 1.200.000 €.  
* **Soft Cap:** 600.000 €.  
* **Marketing Budget:** 30.000 € (Considerado bajo por el equipo técnico, se sugiere venta privada para financiarlo).  
* **Vesting Equipo:** Necesario definir Cliff y Vesting lineal para evitar ventas masivas iniciales.

---

## **6\. Stack Tecnológico Propuesto**

* **Blockchain:** BNB Chain (EVM Compatible).  
* **Smart Contracts:** Solidity (Hardhat/Foundry).  
* **Frontend:** React.js / Next.js \+ TypeScript.  
* **Backend:** Node.js (para gestión de on-ramp, base de datos de usuarios off-chain y analíticas).  
* **Integraciones:**  
  * Web3Auth / Magic Link (para wallets automáticas).  
  * Moonpay / Transak (Pasarela Fiat).  
  * Gnosis Safe (Para tesorería del equipo Multi-sig).

