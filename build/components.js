var DashboardGrid = React.createClass({
		displayName: "DashboardGrid",

		render: function () {

				var dashboardNodes = this.props.data.map(function (item) {
						return React.createElement(DashboardItem, {
								key: item.id,
								name: item.name,
								logo: item.logo,
								href: item.href });
				});
				return React.createElement(
						"div",
						{ className: "col-md-6 col-md-offset-3 dashboardGridContainer" },
						React.createElement(
								"h4",
								null,
								this.props.heading
						),
						React.createElement("hr", null),
						React.createElement(
								"div",
								{ className: "dashboardGrid" },
								dashboardNodes
						)
				);
		}
});

var DashboardItem = React.createClass({
		displayName: "DashboardItem",

		render: function () {
				return React.createElement(
						"div",
						{ className: "dashboardItem col-md-3" },
						React.createElement(
								"a",
								{ href: this.props.href },
								React.createElement("img", { src: this.props.logo, className: "img-responsive img-circle" }),
								React.createElement(
										"div",
										{ className: "text-center" },
										this.props.name
								),
								React.createElement("div", { className: "clearfix" })
						)
				);
		}
});