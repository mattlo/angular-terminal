# Angular Terminal
This is a wrapper around https://github.com/jcubic/jquery.terminal

## How to Initialize
`<div />` acts as a container and the HTML generated stays isolated within the directive element.
The "main" value is the namespace.
```html
<div angular-terminal="main"></div>
```

## How to Interact
Receive an input, assumes `$rootScope` is available.
```js
$rootScope.$on('terminal.main', function (e, input, terminal) {
	// manipulate input
	// `terminal` object is also available for additional manipulation
});
```

Send out an output, assumes `$rootScope` is available. **Incoming events are not available until the directive is initialized.**

```js
$rootScope.$emit('terminal.main.echo', 'Hello World');
```

## License
View the [LICENSE](https://github.com/mattlo/angular-terminal/blob/master/LICENSE) file.