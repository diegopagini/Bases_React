# React

## Input 


### child

```tsx
import { FC } from 'react';

import { Issue } from '../interfaces';
import { State } from '../interfaces/issue.interface';
import { IssueItem } from './IssueItem';

interface Props {
	// Like @Inputs in Angular
	issues: Issue[];
	state?: State;
	onStateChanged: (state?: State) => void;
}

export const IssueList: FC<Props> = ({ issues, state, onStateChanged }) => {
	return (
		<div className='card border-white'>
			<div className='card-header bg-dark'>
				<ul className='nav nav-pills card-header-pills'>
					<li className='nav-item'>
						<a className={`nav-link ${!state ? 'active' : ''}`} onClick={() => onStateChanged()}>
							All
						</a>
					</li>
					<li className='nav-item'>
						<a
							className={`nav-link ${state === State.Open ? 'active' : ''}`}
							onClick={() => onStateChanged(State.Open)}>
							Open
						</a>
					</li>
					<li className='nav-item'>
						<a
							className={`nav-link ${state === State.Closed ? 'active' : ''}`}
							onClick={() => onStateChanged(State.Closed)}>
							Closed
						</a>
					</li>
				</ul>
			</div>
			<div className='card-body text-dark'>
				{issues.map((issue) => (
					<IssueItem key={issue.id} issue={issue} />
				))}
			</div>
		</div>
	);
};

```

### parent

```tsx
import { useState } from 'react';

import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { IssueList, LabelPicker } from '../components';
import { useIssues } from '../hooks';
import { State } from '../interfaces';

export const ListView = () => {
	const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
	const [state, setState] = useState<State>();
	const { issuesQuery } = useIssues();

	const onLabelChanged = (label: string) => {
		selectedLabels.includes(label)
			? setSelectedLabels(selectedLabels.filter((lbs: string) => lbs !== label))
			: setSelectedLabels([...selectedLabels, label]);
	};

	return (
		<div className='row mt-5'>
			<div className='col-8'>
				{issuesQuery.isLoading ? (
					<LoadingIcon />
				) : (
					<IssueList
						issues={issuesQuery.data || []}
						state={state}
						onStateChanged={(newState?: State) => setState(newState)}
					/>
				)}
			</div>

			<div className='col-4'>
				<LabelPicker selectedLabels={selectedLabels} onChange={(label) => onLabelChanged(label)} />
			</div>
		</div>
	);
};

```
