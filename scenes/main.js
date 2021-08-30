addLevel([
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      ?',
	'!                                      !',
	'!                                      !',
	'!                                      !',
	'!                                      !',
	'!                                      !',
	'!                                      !',
	'!                                      !',
	'!                                      !',
	'!xxxxxxxxxxxx   xxxxxxxxxxxx   xxxxxxxx?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc?',
	'!cccccccccccc   cccccccccccc   cccccccc ',
	'cccccccccccc   cccccccccccc   cccccccc ',
	'tttttttttttttttttttttttttttttttttttttt '
], {
	width: 16,
	height: 16,
'x': [sprite('grass'), solid(), 'grass'],
'c': [sprite('dirt'), solid(), 'dirt'],
't': [sprite('enemy'), 'enemy'],
'!': [sprite('!'), solid(), 'sus']
})
const player = add([
	sprite('Player'),
	scale(2.5),
	pos(20, 300),
	body()
])
player.collides('enemy', () => {
	destroy(player)
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
	player.move(0,-200)
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