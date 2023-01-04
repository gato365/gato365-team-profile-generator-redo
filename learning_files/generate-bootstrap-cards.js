// chatGPT Entry: Generate dynamic bootstrap code that creates a grid of cards  based a list of template literals.

  `<div class="container">
	<div class="row">
		${list.map(item => `<div class="col-md-4">
			<div class="card">
				<div class="card-body">
					${item}
				</div>
			</div>
		</div>`).join('')}
	</div>
</div>`


// chatGPT Entry: Create a card based on image and 4 attributes in bootstrap.

  `<div class="card">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${text}</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${attr1}</li>
      <li class="list-group-item">${attr2}</li>
      <li class="list-group-item">${attr3}</li>
      <li class="list-group-item">${attr4}</li>
    </ul>
  </div>