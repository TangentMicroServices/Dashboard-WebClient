var data = [
	{id: 1, name: "Consul", logo: "static/images/consul.jpg", href: "http://consul.tngnt.co" },	
	{id: 3, name: "Jenkins", logo: "static/images/jenkins-340x340.png", href: "http://jenkins.tngnt.co"},
	{id: 4, name: "TimeTracker", logo: "static/images/tangent.png", href: "http://timetracker.tngnt.co"},	
	{id: 6, name: "API Docs", logo: "static/images/docs.png", href: "http://docs.tngnt.co"}
]
var data_wishlist = [
	{id: 5, name: "Project", logo: "static/images/project.png", href: "http://project.tngnt.co"},
	{id: 6, name: "Profile", logo: "static/images/profile.png", href: "http://profile.tngnt.co"},	
	{id: 7, name: "Leave", logo: "static/images/leave.png", href: "http://leave.tngnt.co"},	
	{id: 8, name: "Expenses", logo: "static/images/expense.png", href: "http://expenses.tngnt.co"}
]
var data_admin = [
	{id: 2, name: "Kibana", logo: "static/images/kibana.png", href: "http://kibana.tngnt.co"}
]

ReactDOM.render( 
  <div className="tool-grid" >
  	<DashboardGrid data={data} heading="Tangent Toolset" /><hr/>
  	<DashboardGrid data={data_wishlist} heading="Wishlist" /><hr/>
  	<DashboardGrid data={data_admin} heading="Admin Tools" /><hr/>
  </div>,
  document.getElementById('content')
);