var Bombs = 0
add([
	text('Dont touch the bombs!'),
	color('#00000'),
	pos(20,20)
])
addLevel([
	'!                                                            ?',
	'!                                                            ?',
	'!                                                            ?',
	'!                                                            ?',
	'!                                                            ?',
	'!                                                            ?',
	'!                                                            ?',
	'!                                                            ?',
	'!                                                            ?',
	'!                                                            ?',
	'!                                                xxxxxxxxxxxx?',
	'!                                                cccccccccccc?',
	'!                                                cccccccccccc?',
	'!                                              J cccccccccccc?',
	'!                                                cccccccccccc?',
	'!                                                cccccccccccc?',
	'!                                                cccccccccccc?',
	'!                                                cccccccccccc?',
	'!                                                cccccccccccc?',
	'!                                       ------   cccccccccccc?',
	'!               xxxxxxx  J  xxxxxxx     xxxxxx   cccccccccccc?',
    '!xxxxxxxxxx  J  ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!cccccccccc     ccccccc     ccccccc     cccccc   cccccccccccc?',
	'!tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt?'
], {
	width: 16,
	height: 16,
'x': [sprite('grass'), solid(), 'grass'],
'c': [sprite('dirt'), solid(), 'dirt'],
't': [sprite('enemy'), 'enemy'],
'!': [sprite('!'), solid(), 'sus'],
'?': [sprite('!'), solid(), 'suss'],
'J': [sprite('bomb'), solid(), 'bomb', scale(3.5)],
'-': [sprite('Jump'), solid(), 'Jumpy']
})
const player = add([
	sprite('Player'),
	scale(2.5),
	pos(20, 300),
	body()
])
player.collides('enemy', () => {
	destroy(player),
	go('3')
})
player.collides('bomb', (s)=>{
            go(3)
})
const move = 200
keyDown('right', ()=>{
	player.move(move,0)
})
keyDown('left', ()=>{
	player.move(-move,0)
})
const jump = 200
keyDown('up', ()=>{
	player.move(0,-250)
})
player.collides('dirt', ()=>{
	player.move(0,-201)
})
player.collides('sus', ()=>{
	player.move(201,0)
})
player.collides('grass', ()=>{
	player.move(0,-10)
})
player.collides('suss', ()=>{
	player.move(-201,0)
	go('finish')
})
player.collides('Jumpy', ()=>{
	player.move(0,-2800)
})