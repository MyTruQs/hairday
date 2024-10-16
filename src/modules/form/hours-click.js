export function hoursClick() {
    const hours = document.querySelectorAll(".hour-available")

    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {
            // Remove a seleção de todas as horas.
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            });

            // Adiciona a seleção na hora clicada.
            selected.target.classList.add("hour-selected")

        })
    })

}