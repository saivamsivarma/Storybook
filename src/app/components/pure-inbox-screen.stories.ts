import { moduleMetadata } from '@storybook/angular';
import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { TaskModule } from './task.module';
import { Store, NgxsModule } from '@ngxs/store';
import { TasksState } from '../state/task.state';
import { withKnobs, text } from '@storybook/addon-knobs';
import pureinbox from 'raw-loader!./pureinbox.markdown';
import errorstate from 'raw-loader!./errorstate.markdown';
export default {
    title: 'PureInboxScreen',
    decorators: [
        moduleMetadata({
            imports: [TaskModule, NgxsModule.forRoot([TasksState])],
            providers: [Store],
        }),
        withKnobs
    ],
};
// inbox screen default state
export const Default = () => ({
    component: PureInboxScreenComponent,
    props: {
        title: text('Title', 'Taskbox', 'Title'),
        error: false
    }
});

// inbox screen error state
export const error = () => ({
    component: PureInboxScreenComponent,
    props: {
        error: true,
    },
});

Default.story = {
    parameters: {
        notes: { pureinbox }
    }
}
error.story = {
    parameters: {
        notes: { errorstate }
    }
}