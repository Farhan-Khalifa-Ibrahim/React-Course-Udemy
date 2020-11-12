import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommonDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommonDetail author="Sam" timeAgo="Today at 4:45PM" comment="The blog is nice" photo={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail author="Alex" timeAgo="Yesterday at 4:45PM" comment="Let's have a chat" photo={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail author="Jane" timeAgo="Today at 3:45PM" comment="I like it" photo={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));