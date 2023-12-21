const List = (props: Props) => {
  const {items, headerData} =  props;

  return (
    <ul>
      { headerData && <li data-testid="list-header"> { headerData } </li> }
      {
        items.length === 0 ? 
          <span>表示するデータがありません。</span>
        :
          items.map((item, index) => {
            return(
              <li key={index}>
                <span>
                  {item.icon && 
                    <span>
                      { item.icon }
                    </span>
                  }
                  <span>{item.title}</span>
                </span>
                <span>{item.description}</span>
              </li>
            )
          })
      }
    </ul>
  );
}

export default List;

type Props = {
  items: {title: string, description?: string, icon?: React.ReactNode}[],
  headerData?: string
}