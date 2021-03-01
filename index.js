import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState, dispatch}) => {
	function fireEvent() {
		dispatch('MY_EVENT',{"event-payload":"some data"}, {/* meta */}, {/* error flag: true | false */})
		console.log('event emitted')
	}

	return (
		<div>
			<h2>Slots and Actions prototype</h2>
			<div className="item">
				<button className="bp3-button" on-click={fireEvent}>Emit event 'MY_EVENT'</button>
			</div>
			<div className="buttons-container">
				<div className="bp3-card bp3-elevation-2 box bp3-interactive">
					<div className="now-align">
						<slot name="start" />
					</div>
				</div>
				<div className="bp3-card bp3-elevation-2 box bp3-interactive">
					<div className="now-align">
						<slot name="end" />
					</div>
				</div>
			</div>
		</div>
	);
};

createCustomElement('elsr-slots-prototype', {
	renderer: {type: snabbdom},
	slots: {
		end: {},
		start: {}
	},
	dispatches: {
		'MY_EVENT': {schema: {type: 'object'}}
	},
	view,
	styles,
});
