{
    "restaurantNames": [
      "Silva Lanches",
      "Z café",
      "Canal Café - PUCRS",
      "Palatu's - PUCRS"
    ]
  },

<!-- Exibe nome de restaurantes -->
<ul> 
  {
  testes.map(testes => (
    <ul key={testes}>
      <p className="description">{testes.name}</p>
    </ul>
  ))
  }
</ul>