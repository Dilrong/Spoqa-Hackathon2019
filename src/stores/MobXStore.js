import { observable, action } from 'mobx';

export default class MobXStore{
    @observable isFirework = false;

    @observable isApplause = false;

    @action onFirework = () => {
        this.isFirework = true;
    }
}