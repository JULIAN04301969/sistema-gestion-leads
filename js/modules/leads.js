export const leadsService = {
    obtenerLeads: () => JSON.parse(localStorage.getItem('leads_data')) || [],
    guardarLead: (nuevoLead) => {
        const leads = leadsService.obtenerLeads();
        leads.push(nuevoLead);
        localStorage.setItem('leads_data', JSON.stringify(leads));
    },
    generarMasivos: (cantidad = 50) => {
        const estados = ['Nuevo', 'En Proceso', 'Calificado', 'Convertido'];
        const nombres = ['Juan Pérez', 'María García', 'Carlos Rodríguez', 'Ana Martínez', 'Luis Sánchez'];
        const dominios = ['@empresa.com', '@consultora.net', '@servicios.co', '@industria.org'];
        const nuevosLeads = [];
        const baseActual = leadsService.obtenerLeads().length;

        for (let i = 1; i <= cantidad; i++) {
            nuevosLeads.push({
                id_lead: `L-${String(baseActual + i).padStart(3, '0')}`,
                nombre: `${nombres[Math.floor(Math.random() * nombres.length)]} ${baseActual + i}`,
                email: `contacto${baseActual + i}${dominios[Math.floor(Math.random() * dominios.length)]}`,
                estado: estados[Math.floor(Math.random() * estados.length)],
                fecha_registro: new Date().toLocaleDateString(),
                fecha_ultimo_contacto: new Date().toISOString().split('T')[0],
                feedback_cliente: 'Carga masiva de prueba para evidencia.'
            });
        }
        const leadsActuales = [...leadsService.obtenerLeads(), ...nuevosLeads];
        localStorage.setItem('leads_data', JSON.stringify(leadsActuales));
    }
};