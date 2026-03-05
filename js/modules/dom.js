export const domRenderer = {
    mostrarSeccion: (id) => {
        const secciones = ['auth-container', 'app-header', 'app-content'];
        secciones.forEach(sec => {
            const el = document.getElementById(sec);
            if (el) el.style.display = (sec === id || (id !== 'auth-container' && sec !== 'auth-container')) ? (sec === 'app-header' ? 'flex' : 'block') : 'none';
        });
    },
    renderizarTabla: (container, leads, onGenerar) => {
        container.innerHTML = `
            <section class="view">
                <h2>Panel de Seguimiento</h2>
                <button id="btn-generar-masivo" class="btn-primary" style="background-color: #27ae60; margin-bottom: 20px; width: auto; padding: 10px 20px;">Generar 50 Leads de Prueba</button>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr><th>ID</th><th>Nombre</th><th>Email</th><th>Estado</th><th>Último Contacto</th><th>Feedback</th></tr>
                        </thead>
                        <tbody>
                            ${leads.map(l => `
                                <tr>
                                    <td><strong>${l.id_lead}</strong></td>
                                    <td>${l.nombre}</td>
                                    <td>${l.email}</td>
                                    <td><span class="status-badge">${l.estado}</span></td>
                                    <td>${l.fecha_ultimo_contacto}</td>
                                    <td>${l.feedback_cliente}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </section>
        `;
        document.getElementById('btn-generar-masivo').addEventListener('click', onGenerar);
    }
};