import { authService } from './modules/api.js';
import { leadsService } from './modules/leads.js';
import { domRenderer } from './modules/dom.js';

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const auth = authService.login(user, pass);

    if (auth.success) {
        domRenderer.mostrarSeccion('app-content');
        actualizarDashboard();
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
});

function actualizarDashboard() {
    const container = document.getElementById('app-content');
    const leads = leadsService.obtenerLeads();
    domRenderer.renderizarTabla(container, leads, () => {
        leadsService.generarMasivos(50);
        actualizarDashboard();
    });
}

document.getElementById('btn-dashboard').addEventListener('click', actualizarDashboard);