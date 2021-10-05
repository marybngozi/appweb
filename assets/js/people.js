// Get the containing div
const peoplesDiv = document.querySelector('#peoples');

// fetch the peoples data
fetch('../../assets/people.json').then(res => res.json()).then(data => {
  data.forEach(d => {
    const dataEl = `
      <div class="col-md-3 team-box mb-5">
        <img width="150" height="150" class="rounded-circle mx-auto mb-2" src="../../assets/img/persons/${d.image}" alt="team">
        <p class="text-center mb-0 font-weight-bold">${d.name}</p>
        <p class="text-center mb-0">${d.role}</p>
      </div>
    `;

    peoplesDiv.insertAdjacentHTML("beforeend", dataEl);
  })
})
