import {useRef, useState} from "react";
import InfiniteRenderComponent from './InfiniteRenderComponent';

const InfiniteScrolling = () => {

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isLastPage, setIsLastPage] = useState(false);
    const [currentList, setCurrentList] = useState([])

    const isLoading = useRef(false);

    const handleGetData = () => {
            if(isLoading.current || isLastPage) return;
            isLoading.current = true;

            const result = fetch(`https://dummyjson.com/quotes?limit=10&skip=${(currentPage - 1) * 10}`);
            result.then(r => {
                if(r.ok){
                    r.json().then(s => {
                        if(currentList.length + s.quotes.length >= s.total){
                            setIsLastPage(true);
                        }
                        else{
                            setCurrentPage(prev => prev + 1);
                        }
                        setCurrentList(prev => [...prev, ...s.quotes])
                        console.log(s.quotes)
                    })
                }
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                isLoading.current = false;
            });
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
        <InfiniteRenderComponent search={search} getData={handleGetData} listData={currentList} isLastPage={isLastPage}/>
    </div>
  );
};
export default InfiniteScrolling;
