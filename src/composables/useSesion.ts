import { ref } from 'vue'

export function useSesion() {
    const nombre = ref('')
    const telefono = ref('')
    const edad = ref('')
    const correo = ref('')
    const contraseña = ref('')
    const esRegistro = ref(false)
    const enviado = ref(false)
    const noenviado = ref(false)

    function confirmarInscripcion() {
    const camposRequeridos = esRegistro.value
        ? [nombre.value, telefono.value, edad.value, correo.value, contraseña.value]
        : [correo.value, contraseña.value]

        if (camposRequeridos.some((campo) => !campo.trim())) {
            noenviado.value = true
        } else {
            noenviado.value = false
            enviado.value = true
        }
    }

    function cambiarModo() {
        esRegistro.value = !esRegistro.value
        noenviado.value = false
        enviado.value = false
    }

    return {
        nombre,
        telefono,
        edad,
        correo,
        contraseña,
        esRegistro,
        enviado,
        noenviado,
        confirmarInscripcion,
        cambiarModo
    }
}