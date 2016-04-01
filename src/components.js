

var DashboardGrid = React.createClass({
    render: function() {

	    var dashboardNodes = this.props.data.map(function(item) {
	      return (	      		
	        	<DashboardItem 
		        	key={item.id} 
		        	name={item.name}
		        	logo={item.logo}
		        	href={item.href} ></DashboardItem>
	      );
	    });
	    return (
	      	<div className="col-md-6 col-md-offset-3 dashboardGridContainer">
	      		<h4 >{this.props.heading}</h4><hr/>
	      		<div className="dashboardGrid" >{dashboardNodes}</div>
	      	</div>	      	
	    );
	}
});

var DashboardItem = React.createClass({
  render: function() {
    return (
      <div className="dashboardItem col-md-3">
        <a href={this.props.href} >
	      	<img src={this.props.logo} className="img-responsive img-circle" />
	      	<div className='text-center'>{this.props.name}</div>
	      	<div className='clearfix' ></div>
	    </a>
      </div>
    );
  }
});