import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    auther = "Sam"
                    timeAgo = "Today at 4:00"
                    comment = "Nice Blog Post!"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    auther = "Alex"
                    timeAgo = "Today at 5:00"
                    comment = "Awesome!"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    auther = "Jane"
                    timeAgo = "Today at 6:00"
                    comment = "Good!"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);