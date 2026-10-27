// Datos de la Simulación de Tickets (Prácticas de Soporte)
const ticketsData = [
    {
        id: "TICK-101",
        title: "Error en inicio de sesión de usuario",
        category: "Incidencia Técnica / Acceso",
        client: "María Fernanda R.",
        channel: "Zendesk / Correo",
        clientText: '"Hola, intento ingresar a la plataforma con mi correo corporativo pero me sale error \'Credenciales Inválidas\' desde esta mañana. Necesito acceder urgente a mis reportes."',
        agentText: `Hola María Fernanda, gracias por comunicarte con nosotros.<br><br>Con gusto te ayudo a resolverlo. He verificado tu usuario en el sistema y procedí a realizar un reinicio de sesión seguro.<br><br><strong>Por favor sigue estos breves pasos:</strong><br>1. Borra la memoria caché y cookies de tu navegador.<br>2. Ingresa mediante el enlace temporal enviado a tu correo corporativo.<br><br>Quedo atenta a tu confirmación para asegurarme de que puedas visualizar tus reportes sin problemas.`,
        logId: "TICK-101",
        logStatus: "En Seguimiento",
        logType: "Acceso / Autenticación",
        logSLA: "45 min (A tiempo)"
    },
    {
        id: "TICK-102",
        title: "Consulta sobre actualización de plan y facturación",
        category: "Atención General / Facturación",
        client: "Carlos Mendoza - Pyme Consultores",
        channel: "Correo Electrónico Directo",
        clientText: '"Estimados, deseamos ampliar de 5 a 12 licencias de usuario para nuestro equipo el próximo mes. ¿Cuál sería el costo ajustado y la fecha de facturación?"',
        agentText: `Hola Carlos, un gusto saludarte.<br><br>Con mucho gusto te brindo el detalle. Al realizar la ampliación a 12 licencias, se aplica la tarifa corporativa con un 10% de descuento sobre el valor total.<br><br>Adjunto en este correo la cotización formal en PDF e instructivo de prorrateo. El ajuste se reflejará en la factura del primer día del próximo mes.<br><br>Si estás de acuerdo, responde este correo confirmando para procesar el registro inmediatamente.`,
        logId: "TICK-102",
        logStatus: "Resuelto",
        logType: "Consulta / Facturación",
        logSLA: "Resuelto en 15 min"
    },
    {
        id: "TICK-103",
        title: "Reclamo por demora en respuesta de trámite",
        category: "Atención de PQR / Reclamos",
        client: "Lucía Paredes",
        channel: "Zendesk Webform",
        clientText: '"Ingresé mi solicitud de cambio de datos hace 3 días y nadie me responde. Requiero respuesta hoy mismo o escalaré el caso."',
        agentText: `Estimada Lucía, comprendo totalmente tu malestar y te ofrezco una disculpa sincera por la demora en este trámite.<br><br>He tomado tu caso de forma prioritaria. Revisé la documentación adjunta y he completado la actualización de tus datos en el sistema en este momento.<br><br>Te he enviado la constancia firmada a tu correo. Reitero las disculpas y quedo a tu entera disposición para cualquier requerimiento adicional.`,
        logId: "TICK-103",
        logStatus: "Resuelto - Prioritario",
        logType: "Reclamo / PQR",
        logSLA: "Resuelto (Escalado)",
    }
];

// Función para cambiar de ticket en la interfaz interactiva
function loadTicket(index) {
    const data = ticketsData[index];
    
    // Actualizar botones de lista
    const items = document.querySelectorAll('.ticket-item');
    items.forEach((item, idx) => {
        if(idx === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Actualizar contenido principal
    document.getElementById('ticket-category-badge').textContent = data.category;
    document.getElementById('ticket-title-detail').textContent = data.title;
    document.getElementById('ticket-client').textContent = data.client;
    document.getElementById('ticket-channel').textContent = data.channel;
    
    document.getElementById('ticket-client-text').innerHTML = data.clientText;
    document.getElementById('ticket-agent-text').innerHTML = data.agentText;
    
    document.getElementById('log-id').textContent = data.logId;
    document.getElementById('log-status').textContent = data.logStatus;
    document.getElementById('log-type').textContent = data.logType;
    document.getElementById('log-sla').textContent = data.logSLA;
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para links navegables
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});