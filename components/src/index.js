import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                auther = "Sam"
                timeAgo = "Today at 4:00"
                comment = "Nice Blog Post!"
                avatar = {faker.image.avatar()}
            />

            <CommentDetail
                auther = "Alex"
                timeAgo = "Today at 5:00"
                comment = "Awesome!"
                avatar = {faker.image.avatar()}
            />

            <CommentDetail
                auther = "Jane"
                timeAgo = "Today at 6:00"
                comment = "Good!"
                avatar = {faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);