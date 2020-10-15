
const checkUrl = () => {
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');
    return parseInt(id);
};

export default class Data {
    constructor() {

        this._tornamentId = checkUrl();
    }

    _baseUrl = 'https://myvolley.ru/api';

    async sendData(body) {
        const url = `https://myvolley.ru/servlet/admins?nc_request=1&tid=${this._tornamentId}&ajax=1`;
        const reqOpts = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        };

        return await fetch(url, reqOpts);

    };

    async getData(url) {
        const res = await fetch(`${this._baseUrl}${url}${this._tornamentId}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} ${res.status}`)
        }
        return res.json();
    }
    async getStat(num) {
        const groupNum = num || 0;
        const res = await fetch(`${this._baseUrl}/tournament?id=${this._tornamentId}&group=${groupNum}&request=statistic`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${res.status}`)
        }
        return await res.json();
    }
    async getProt(url) {
        const res = await fetch(`${this._baseUrl}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} ${res.status}`)
        }
        return await res.json();
    }

    async getNews() {
        return await this.getData(`/tournament?request=news&id=`);
    }

    async getComments() {
        return await this.getData(`/tournament?request=comments&id=`);
    }

    async getInfo() {
        return await this.getData(`/tournament?request=common&id=`);
    }

    async getMain() {
        return await this.getData(`/tournament?request=info&id=`);
    }

    async getTeams() {
        return await this.getData(`/tournament?request=teams&id=`);
    }

    async getMedals() {
        return await this.getData(`/tournament?request=medals&id=`);
    }

    async getVideo() {
        return await this.getData(`/tournament?request=video&id=`);
    }

    async getPersonal() {
        return await this.getData(`/tournament?request=org&id=`);
    }

    async getStatistic(groupNum) {
        return await this.getStat(groupNum);
    }

    async getProtocol(matchId) {
        return await this.getProt(`/game?request=protokol&id=${matchId}`);
    }

    async getGallery() {
        return await this.getData(`/tournament?request=galleries&id=`);
    }
    async getGalleryPhoto(type, id) {
        return await this.getData(`/tournament?request=gallery&type=${type}&type_id=${id}&id=`);
    }

    async getResults(num) {
        const groupNum = num || 0;
        return await this.getData(`/tournament?request=games&group=${groupNum}&id=`);
    }

    async getSchedule(num) {
        const groupNum = num || 0;
        return await this.getData(`/tournament?request=schedule&group=${groupNum}&id=`);
    }

    async getFaq() {
        return await this.getData(`/tournament?request=faq&id=`);
    }

    async getAbout() {
        return await this.getData(`/tournament?request=about&id=`);
    }

    async getLiveMatch(matchId) {
        const res = await fetch(`${this._baseUrl}/game?request=game&id=${matchId}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${matchId} ${res.status}`)
        }
        return await res.json();
    }
}