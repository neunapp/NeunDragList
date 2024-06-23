const styles = {
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'block',
    position: 'relative',
    background: 'none'
  },
  ulItem: {
    display:'block',
    padding: '5px',
    cursor: 'pointer',
  },
}

const defaultRenderItem = (item) => {
  return(
    <span>{ JSON.stringify(item) }</span>
  )
}

const AppDragItemsList = ({
  list, 
  setList, 
  renderItem=defaultRenderItem
}) => {

  const swapState = (i, j) => {
    // i,j = posiciones de elementos en el array
    if (i != j) {
      let newList = [...list]
      let temp = newList[i]
      newList[i] = newList[j]
      newList[j] = temp
      setList(newList)
    }
    
  }

  const onDragStartItem = (e) => {
    // Este evento ocurre cuando el usuario comienza a arrastrar el elemento. 
    e.dataTransfer.setData('text/plain', e.target.id)
    // Establecer el estilo del elemento original
    e.target.style.border = '5px solid #2980b9'
    e.target.style.opacity = '1'
    e.target.style.transform = 'scale(0.7)'
  }

  const onDragItem = (e) => {
    //  se dispara continuamente mientras el usuario arrastra el elemento.
    e.target.style.boxShadow = 'none'
    e.target.style.opacity = 0.9
    e.target.style.backgroundColor = 'none';
  }

  const onDragEndItem = (e) => {
    // Se dispara cuando el usuario suelta el elemento después de arrastrarlo
    e.target.style.border = 'None'
    e.target.style.transform = 'scale(1)'
    e.target.style.opacity = '1'
  }

  const onDragEnterItem = (e) => {
    // Sucede cuando un elemento se arrastra sobre el área de destino.
    const elemento = e.target;
    // Cambia el estilo del elemento directamente
    elemento.style.border = '1px solid #2980b9'
    e.target.style.transform = 'scale(1.1)'
    e.target.style.opacity = '0.4'
    //
  }

  const onDragLeaveItem = (e) => {
    // ocurre cuando un elemento arrastrado sale del área de destino sin soltarlo
    e.target.style.border = 'None'
    e.target.style.transform = 'scale(1)'
    e.target.style.opacity = '1'
  }

  const onDragOverItem = (e) => {
    // Ocurre continuamente mientras se arrastra un elemento sobre el área de destino. 
    e.preventDefault()
  }

  const onDropItem = (e) => {
    // Se dispara cuando se suelta un elemento arrastrado en el área de destino.
    e.preventDefault()
    // quitamos estilos
    e.target.style.border = 'None'
    e.target.style.transform = 'None'
    e.target.style.opacity = '1'
    //
    const idMovItem = parseInt(e.dataTransfer.getData('text/plain'))
    let liElement = e.target.closest('li')
    if (liElement) {
      const idDropItem = parseInt(liElement.id)
      swapState(idMovItem, idDropItem)
    }
  }

  return (
    <div>
      <ul
        style={styles.ul} 
      >
        {
          list.map((item, index) => {
            return (
              <li
                id={index}
                key={item.id} 
                draggable={true}
                onDragStart={onDragStartItem}
                onDrag={onDragItem}
                onDragEnd={onDragEndItem}
                onDragEnter={onDragEnterItem}
                onDragLeave={onDragLeaveItem} 
                onDragOver={onDragOverItem}
                onDrop={onDropItem}
                style={styles.ulItem}> { renderItem(item) } </li>)
          })
        }
      </ul>
    </div>
  )
}



export default AppDragItemsList