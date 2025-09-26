
let tareas = [];

function agregarTarea(event) {
    event.preventDefault();
    const descripcion = document.getElementById('descripcion').value;
    const fecha = document.getElementById('fecha').value;
    const prioridad = document.getElementById('prioridad').value;
    const tarea = { descripcion, fecha, prioridad, completada: false };
    tareas.push(tarea);
    renderizarTareas();
    document.getElementById('tareaForm').reset();
}

function renderizarTareas() {
    const listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = '';
    const mostrarSoloAlta = document.getElementById('filtroAlta').checked;
    let tareasFiltradas = tareas;
    if (mostrarSoloAlta) {
        tareasFiltradas = tareas.filter(tarea => tarea.prioridad === 'Alta');
    }
    tareasFiltradas.forEach((tarea, index) => {
        const tareaItem = document.createElement('li');
        tareaItem.innerHTML = `
            <span class="${tarea.completada ? 'completada' : ''}">${tarea.descripcion} - ${new Date(tarea.fecha).toLocaleDateString()} - ${tarea.prioridad}</span>
            <input type="checkbox" ${tarea.completada ? 'checked' : ''} onchange="marcarCompletada(${index})">
        `;
        listaTareas.appendChild(tareaItem);
    });

}

function marcarCompletada(index) {
    tareas[index].completada = !tareas[index].completada;
    renderizarTareas();
}

document.getElementById('tareaForm').addEventListener('submit', agregarTarea);