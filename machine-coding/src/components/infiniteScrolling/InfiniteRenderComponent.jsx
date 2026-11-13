import { useEffect, useRef } from "react";

const InfiniteRenderComponent = ({getData, search, listData, isLastPage}) => {

    const listRef = useRef(null);
    const sentinelRef = useRef(null);

    useEffect(() => {
        getData(search);
    }, [search])

    useEffect(() => {
        // ---->
        const root = listRef.current;
        const sentinel = sentinelRef.current;
        if(!root || !sentinel || isLastPage) return;


        // ---->
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) getData(search);
        }, {root});

        observer.observe(sentinel);
        return () => observer.disconnect();

    }, [isLastPage, listData.length])

  return ( 
    <div ref={listRef} style={{height: 150, overflow: 'auto'}}>
        {listData.map((data => {
            return <p>{data.author}</p>
        }))}
        <div ref={sentinelRef}></div>
    </div>
  );
};

export default InfiniteRenderComponent;