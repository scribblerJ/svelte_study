import { writable, readable, derived} from "svelte/store";
// 기초
export const count = writable(0)

// 시계 만들기
export const time = readable(null, function start(set){
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function strop() {
        clearInterval(interval);
        
    }
});
const start = new Date();
export const elapsed = derived(time, $time => Math.round(($time -start)/1000));

//
export const name = writable('world');
export const greeting = derived(name, $name => `Hello ${$name}` ); //자바스크립트 포멧팅 시 ` 사용하기