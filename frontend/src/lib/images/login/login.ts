import { PUBLIC_BACKEND_URL } from "$env/static/public"

export const checkIfLoggedIn = async () => {
    try {
        const response = await fetch(`${PUBLIC_BACKEND_URL}/verify_token`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('session')
            }
        });
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error checking login status:", error);
        return false;
    }
}