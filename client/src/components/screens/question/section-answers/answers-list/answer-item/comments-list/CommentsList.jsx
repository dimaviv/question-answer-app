import {useState} from 'react';

import {StyledCommentsList} from './StyledCommentsList';
import CommentItem from './comment-item/CommentItem';
import CommentForm from './comment-form/CommentForm';
import {useParams} from 'react-router-dom';

const CommentsList = ({answer}) => {
    const questionId = useParams().questionId
    const [commentText, setCommentText] = useState('');

    const handleSubmitForm = async (e) => {
        e.preventDefault();
    };

    return (
        <StyledCommentsList>
            {(answer.comments && answer.comments.length > 0) &&
                <div className={'commentsList__content'}>
                    {answer.comments.map(comment =>
                        <CommentItem key={comment.id}
                                     comment={comment}
                        />
                    )}
                </div>
            }
            <CommentForm questionId={questionId}
                         answerId={answer.id}
            />
        </StyledCommentsList>
    );
};

export default CommentsList;