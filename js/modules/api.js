export const authService = {
    login: (user, pass) => {
        if (user && pass.length >= 4) {
            return { success: true, role: 'asesor', token: 'jwt-simulado' };
        }
        return { success: false };
    }
};