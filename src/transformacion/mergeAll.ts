import { fromEvent, Observable } from 'rxjs';
import { debounceTime, pluck, map, mergeAll, tap, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUsersResp } from '../interfaces/github-users.interface';
import { GithubUser } from '../interfaces/github-user.interface';

// Referencias dom
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const addUsersInHtml = (users: GithubUser[]) => {
	orderList.innerHTML = '';

	for (const user of users) {
		const li = document.createElement('li');
		const img = document.createElement('img');
		img.src = user.avatar_url;
		const anchor = document.createElement('a');
		anchor.href = user.html_url;
		anchor.text = 'Ver página';
		anchor.target = '_blank';

		li.append(img);
		li.append(user.login + ' ');
		li.append(anchor);

		orderList.append(li);
	}
};

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$
	.pipe(
		debounceTime<KeyboardEvent>(500),
		pluck<KeyboardEvent, string>('target', 'value'),
		tap(console.log),
		filter((text) => text && text !== '' ),
		map<string, Observable<GithubUsersResp>>((text) =>
			ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
		),
		mergeAll<GithubUsersResp>(),
		pluck<GithubUsersResp, GithubUser[]>('items')
	)
	.subscribe(addUsersInHtml);
