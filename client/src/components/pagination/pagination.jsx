import style from './pagination.module.css';

export default function Pagination ({countriesPerPage, currentPage, setCurrentPage, totalCountries}) {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }

    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1);
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }
    
    return (
      <div>
        {
          pageNumbers.length === 1 ? setCurrentPage(1) : <nav className={style.container}>
          {
              currentPage === 1 ? null : <button
              className= {style.btn}
              onClick={onPreviousPage}
            >
              Previous
            </button>
          }
      <ul className={style.ul}>
        {pageNumbers.map((noPage) => (
          <li key={noPage} className={style.li}>
            <button
              className={`${style.link} ${currentPage === noPage ? style.current : ''}`}
              onClick={() => onSpecificPage(noPage)}
            >
              {noPage}
            </button>
          </li>
        ))}
      </ul>
      {
          currentPage === pageNumbers.length ? null : <button
          className={style.btn}
          onClick={onNextPage}
        >
          Next
        </button>
      }
      
    </nav>
        }
      </div>
        
    )
}