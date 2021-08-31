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
	'!                                                            ?',
	'!                                                            ?',
	'!                      xxxxxxx                               ?',
    '!xxxxx   xxxxxxxxxx    ccccccc    xxxxxxx     xxxxxxxx    xxx?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!ccccc   cccccccccc               ccccccc     cccccccc    ccc?',
	'!tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt?'
], {
	width: 16,
	height: 16,
'x': [sprite('grass'), solid(), 'grass'],
'c': [sprite('dirt'), solid(), 'dirt'],
't': [sprite('enemy'), 'enemy'],
'!': [sprite('!'), solid(), 'sus'],
'?': [sprite('!'), solid(), 'suss']
})
const player = add([
	sprite('Player'),
	scale(2.5),
	pos(20, 300),
	body()
])
player.collides('enemy', () => {
	destroy(player),
	go('1')
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
	player.move(-201,0),
	go('2')
})