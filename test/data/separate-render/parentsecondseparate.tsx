import { ChildSeparate } from './childseparate';
import Component from 'inferno-component';
import Inferno from 'inferno';
Inferno; // suppress ts 'never used' error

export class ParentSecondSeparate extends Component<any, any> {
	foo: string;
	constructor(props) {
		super(props);

		this.foo = 'Second';
	}

	render() {
		return (
			<div>
				<ChildSeparate name={this.foo}/>
			</div>
		);
	}
}
