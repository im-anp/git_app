import React from 'react';
import { Link } from 'react-router';
class List extends React.Component {
	 constructor() {
        super();
        this.state = {
        	list:[]
        };
    }

    componentDidMount() {
       fetch('https://api.github.com/users?since=1')
      // fetch(`https://api.github.com/search/users?q=${this.props.params.username}+repos:%3E12+followers:%3E1000`)
       // https://api.github.com/search/users?q=tom+repos:%3E12+followers:%3E1000
        .then(response => response.json())
        .then(
            list => {
                this.setState({
                    list: list
                });
            }
        );
        console.log(this.state.list);
    }

    render(){
    	const {list} = this.state;
    	const hello  = list.map(function(user){
    		return (
            <div className="user-page">
                <div className="user-info peaple-list">
                    <Link className="user-info__text" to={`/user/${user.login}`}>
                        <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                        <h2 className="user-info__title" style={{float:'left'}}>{user.login}</h2>
                        <button className="search-page__button" style={{float:'right'}} href={user.following_url}>Follow</button>
                    </Link>
                </div>
            </div>
        );	
    	});
    	return(
		<ul className="col-md-4 list-group">
    	 {hello}
        </ul>
    	);
    	
    	
    }
};
export default List;