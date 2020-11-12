import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333'
});

export default api;

/**
 * iOs no Emulador: localhost
 * iOS no dispositivo : IP da máquina.
 * Android no Emulador: localhost (adb reverse)
 * Android no Emulador: 10.0.2.2 (Android Studio)
 * Android no Emulador: 10.0.3.2 (Genymotion)
 * Android no dispositivo: Ip da máquina
 */