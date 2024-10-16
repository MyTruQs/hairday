import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";
const periods = document.querySelectorAll('.period');

// Gera evento click para cada lista (manhã, tarde, noite).
periods.forEach(period => {
    // Captura o evento de clique na lista.
    period.addEventListener('click', async (event) => {
        if (event.target.classList.contains('cancel-icon')) {
            // Obtem a li pai do elemento criado.
            const item = event.target.closest('li');

            // Pega o id do agendamento para remover.
            const { id } = item.dataset;

            // Confirma que o id foi encontrado.
            if (id) {
                // Pergunta se deseja cancelar o agendamento.
                const isConfirm = confirm('Deseja realmente cancelar o agendamento?');

                if (isConfirm) {
                    // Faz a requisição da API para cancelar.
                    await scheduleCancel({ id });

                    // Recarrega os agendamentos.
                    schedulesDay();
                }
            }
        }
    });
});