angular
.module('angular-terminal', [])
.directive('angularTerminal', ['$rootScope', function ($rootScope) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			// define namespace
			var namespace = 'terminal.' + (attrs.angularTerminal || 'default'),
				t;

			// initialize terminal object
			t = element.terminal(function(input, terminal) {
				// user input commands
				$rootScope.$emit(namespace, input, terminal);
			}, {
   				greetings: attrs.greetings || '',
				prompt: attrs.prompt || ">"
			});

			// receiving echo commands\
			$rootScope.$on(namespace + '.echo', function (e, msg) {
				t.echo(msg);
			});
		}
	};
}]);
