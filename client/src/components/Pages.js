import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Pages = observer(() => {
    const {question} = useContext(Context)
    const pageCount = Math.ceil(question.totalCount / question.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    let className = "blocks"
    return (<div id="pagination">
        <a
            onClick={() => {
                if (question.page > 1) question.setPage(question.page - 1)
            }}
            className="blocks">&laquo;</a>

        {pages.map(page => {
            let curClassName = className;
            if (question.page === page) curClassName += ' active'
            return (<a
                key={page}
                onClick={() => question.setPage(page)}
                className={curClassName}
            >
                {page}</a>)
        })}
        
        <a
            onClick={() => {
                if (question.page < pageCount) question.setPage(question.page + 1)
            }}
            className="blocks">&raquo;</a>
    </div>);
});

export default Pages;