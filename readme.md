## To Do

# Phase 1 Basic Game Loop

- Battle System
-- `battleData.currentSel` should only receive indexes
--- So player and enemy objs can be referenced directly rather than looped
-- Need a `getSelectedPlayer()` function
--- In place of `var currentPlayer = Object.keys(battleData.stack).length;`
-- Tracking player and enemy death
--- Dead characters get removed from turn stack
-- Revamp character stat values
--- To more accurately test battle end state
-- battleEnd() function to return to overworld
--- Trigger on successful escape or all enemies dead
--- Remove enemy from map data
--- Resave player stat data from `battleData` to `stats`
--- Clear `battleData`

- Collision interactions
-- Track when enemy collides with player

- Character data
-- Character inventory and equipment tracking
-- How equipment modifies stats
-- How inventory modifies interactivity options
-- Item table for looking up behavior and stat changes

- Interactive map elements
-- Chest object that gives a character an inventory item
-- Door object that requires a key

- Overworld UI
-- "Zelda-like" UI elements to display current held item, keys, etc

- Battle Defense
-- Need functions to handle defend targeting and temporary stat recalc
-- Need functions to handle escape success rolls

- Battle magic
-- Magic menu in battle checks inventory for spells
-- Spell table for looking up effects and targeting options
-- Different targeting options depending on selected spell

- Pause menu (shift key)
-- UI for changing equipment, viewing stats, inventory, etc.

- Battle animations
-- Animate for all 3 attack types
-- Animte for 3 basic magic effects
--- Target single enemy, target player, target all enemies

- Movement between maps
-- Tile data for exit and entry points
-- Trigger draw for multiple map data arrays

- Calculating damage
-- Need a function that takes into account attack type, current stances, character stats, and current equipment

- Dynamic lighting effects
-- Revamp how sprite data works
--- Render colors on the fly based on tile light data

- Camera scrolling
-- Center player in overworld and move map around screen

# Phase 2 Game Creation Engine

- Map creator UI
-- Setting base map params
--- Width and height
--- Base lighting
-- Placing objects
--- Defining object behavior (animation, interactivity, etc)
--- Defining object sprite
-- Placing entities
--- Define entity behavior (select AI function like run, chase, loop, etc)
--- Define entity stats
-- Placing lighting effects
--- Define color and intensity

- Game creator UI
-- New server subdomain for creators
-- Link different maps together
-- Define player starting point
-- Define success params
-- Creator database and Google account integration
-- Publishing options

- Game publishing
-- New server subdomain for gameplay
-- Custom title screen
-- Player database and Google account integration
-- Game save data

# Phase 3 Implementing Game Ideas

- Finalize sprites and design
-- Look and feel for all game elements
-- Custom font??

- Music engine

- Implement non-core gameplay elements as needed
-- Dialogue
-- Out of battle interactivity options
-- Battle "cutscenes"
-- Real-time tile data (for things like plants, etc)
-- New object table for looking up plant/building type, growth rate, drops, etc