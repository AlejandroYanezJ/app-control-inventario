export const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const validacionRutModulo11 = (rutConDV) => {
    const rut = rutConDV.replace("-", "")
    const dv = rut.slice(-1);
    const rutSinDV = rut.slice(0, -1);
    let suma = 0;
    let multiplicador = 2;
    for (let i = rutSinDV.length - 1; i >= 0; i--) {
        suma += parseInt(rutSinDV.charAt(i)) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
    const dvEsperado = 11 - (suma % 11);
    const dvCalculado = dvEsperado === 11 ? "0" : dvEsperado === 10 ? "K" : dvEsperado.toString();
    if (dv === dvCalculado) {
        return true;
    }
    return false;
}

export const validarRegex = (regex, input) => {
    console.log("se valida regex -->", regex, "para el input -->", input)
    if (regex.test(input)) {
        return true;
    }
    return false;
}