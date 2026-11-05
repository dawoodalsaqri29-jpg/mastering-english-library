"""Turn a story JSON into Gamma image prompts (cover + p0..p9). usage: python3 prompts.py series/stories/NN-*.json"""
import json, sys, os

STYLE = ("Rich painterly storybook illustration in the style of classic fantasy book art, "
         "soft cinematic light, detailed textures, warm and magical atmosphere, portrait composition. "
         "No text, no letters, no words, no watermark, no logos.")

BODY = {'boy': 'a boy of about 12', 'girl': 'a girl of about 12', 'man': 'a man', 'woman': 'a woman',
        'old_man': 'an old man with a white beard', 'old_woman': 'an old woman with silver hair',
        'stout_man': 'a stocky, broad man', 'child': 'a small child of about 8'}
OUTFIT = {'tunic': 'a simple tunic, trousers and boots', 'cloak': 'a long travelling cloak', 'robe': 'a long robe',
          'dress': 'a simple dress', 'coat': 'a long coat', 'armour': 'armour', 'dishdasha': 'a white Omani dishdasha',
          'abaya': 'a black abaya and headscarf', 'pirate_coat': 'a pirate coat', 'rags': 'ragged clothes', 'gown': 'an elegant gown'}
HEAD = {'none': '', 'short_hair': 'short hair', 'long_hair': 'long hair', 'curly_hair': 'curly hair', 'ponytail': 'a ponytail',
        'braid': 'a long braid', 'bun': 'hair in a bun', 'hood': 'a hood', 'top_hat': 'a top hat', 'deerstalker': 'a deerstalker cap',
        'crown': 'a crown', 'tiara': 'a small tiara', 'wizard_hat': 'a tall pointed wizard hat', 'tricorn': 'a tricorn hat',
        'turban': 'a turban', 'kumma': 'an embroidered Omani kumma cap', 'ghutra': 'a white headdress', 'helmet': 'a helmet',
        'cap': 'a cap', 'bonnet': 'a bonnet', 'feather_cap': 'a green cap with a feather', 'bald': 'a bald head', 'beard': 'short hair and a beard'}
ITEM = {'none': '', 'lantern': 'a lantern', 'sword': 'a sword', 'staff': 'a wooden staff', 'bow': 'a longbow', 'book': 'a book',
        'map': 'an old map', 'magnifier': 'a magnifying glass', 'torch': 'a burning torch', 'key': 'a key', 'shield': 'a shield',
        'spear': 'a spear', 'pipe': 'a pipe', 'cane': 'a walking cane', 'umbrella': 'an umbrella', 'basket': 'a basket',
        'letter': 'a letter', 'bag': 'a bag', 'magic_lamp': 'an old oil lamp', 'trident': 'a trident', 'mirror_shield': 'a shining mirror-bright shield',
        'sack': 'a sack', 'telescope': 'a telescope', 'crutch': 'a wooden crutch', 'watch': 'a pocket watch'}
SKY = {'dawn': 'at dawn, pink and gold sky', 'day': 'in bright daylight', 'sunset': 'at sunset, glowing orange sky',
       'dusk': 'at dusk, violet sky', 'night': 'at night under a starry sky', 'storm': 'in a dark storm', 'mist': 'in thick mist',
       'desert_day': 'under a hot desert sun', 'desert_night': 'on a desert night with bright stars', 'underwater': 'under the sea, rays of light from above',
       'cave': 'deep underground', 'indoor_warm': 'indoors, warm lamplight', 'indoor_night': 'indoors at night, moonlight through a window',
       'magic': 'in shimmering magical light', 'snow': 'in falling snow'}
LAND = {'hills': 'green rolling hills', 'mountains': 'high mountains', 'forest': 'an ancient forest', 'sea': 'the open sea',
        'shore': 'a beach by the sea', 'desert': 'desert dunes', 'village': 'a small village', 'arabian_city': 'an old Arabian city with white houses',
        'london_street': 'a Victorian London street with gas lamps', 'castle_hall': 'a great stone castle hall', 'cave': 'a dark cave',
        'room': 'a cosy room', 'library': 'an old library full of books', 'garden': 'a beautiful garden', 'maze': 'a tall hedge maze',
        'ship_deck': 'the deck of a sailing ship', 'island': 'a tropical island', 'snow': 'a frozen snowy land', 'swamp': 'a misty marsh',
        'cliff': 'a high cliff edge', 'market': 'a busy old market', 'palace_hall': 'a grand palace hall', 'ruins': 'ancient ruins',
        'field': 'open fields', 'road': 'a winding road', 'tunnel': 'a narrow stone tunnel'}
LMK = {'castle': 'a castle', 'dark_tower': 'a dark tower', 'tower': 'a stone tower', 'galleon': 'a tall sailing ship',
       'lighthouse': 'a lighthouse', 'big_tree': 'a huge old tree', 'stone_arch': 'an ancient stone archway', 'greek_temple': 'a Greek temple',
       'pyramid': 'a pyramid', 'omani_fort': 'an old Omani fort with round towers', 'cottage': 'a cottage', 'cave_mouth': 'a cave entrance',
       'bridge': 'a bridge', 'ruins': 'ruins', 'volcano': 'a smoking volcano', 'palace_dome': 'a domed palace', 'clock_tower': 'a clock tower',
       'round_door': 'a round wooden door', 'well': 'an old well', 'palm_oasis': 'a palm oasis', 'windmill': 'a windmill',
       'standing_stones': 'a circle of standing stones', 'mansion': 'a gloomy old mansion', 'rabbit_hole': 'a rabbit hole under a tree',
       'emerald_city': 'a shining green city', 'sword_in_stone': 'a sword stuck in a stone', 'labyrinth_wall': 'the stone walls of a labyrinth',
       'throne': 'a throne', 'window': 'a large window', 'fireplace': 'a fireplace', 'bookshelves': 'tall bookshelves', 'street_lamps': 'street lamps',
       'market_stalls': 'market stalls', 'mosque_dome': 'a white dome and minaret', 'mountain_peak': 'a tall mountain peak',
       'waterfall': 'a waterfall', 'gallows_tree': 'a bare twisted tree', 'iron_gate': 'an iron gate'}
POSE = {'stand': 'standing', 'walk': 'walking', 'run': 'running', 'point': 'pointing', 'raise': 'raising one arm high',
        'kneel': 'kneeling', 'sit': 'sitting', 'fight': 'fighting bravely', 'look_up': 'looking up', 'fall': 'falling',
        'wave': 'waving', 'think': 'thinking', 'read': 'reading', 'hold_out': 'holding something out'}
LIGHT = {'none': '', 'lantern': 'lit by a glowing lantern', 'fire': 'lit by firelight', 'magic': 'lit by glowing magic',
         'moonbeam': 'lit by moonlight', 'sunrise': 'lit by the rising sun', 'candle': 'lit by candlelight', 'lightning': 'lit by flashes of lightning'}

def look(c):
    if c.get('look'): return c['look']
    bits = [BODY.get(c.get('body'), 'a person'), 'wearing ' + OUTFIT.get(c.get('outfit'), 'simple clothes')]
    h = HEAD.get(c.get('head', 'none'), '')
    if h: bits.append('with ' + h)
    return ', '.join(bits)

def scene_prompt(S, sc, text=''):
    cast = {c['id']: c for c in S['cast']}
    parts = []
    who = []
    for ch in sc.get('chars', [])[:3]:
        c = cast.get(ch['id'])
        if not c: continue
        it = ITEM.get(ch.get('item', c.get('item', 'none')), '')
        s = f"{c['name']} ({look(c)})" + (f", holding {it}" if it else '') + f", {POSE.get(ch.get('pose', 'stand'), 'standing')}"
        if ch.get('far'): s += ' in the distance'
        who.append(s)
    if who: parts.append('Characters: ' + '; '.join(who) + '.')
    cr = [f"a {'huge ' if x.get('size') in ('l', 'xl') else ''}{x['type'].replace('_', ' ')}" + (' flying in the sky' if x.get('pos') == 'sky' else '') for x in sc.get('creatures', [])]
    if cr: parts.append('Also in the scene: ' + ', '.join(cr) + '.')
    place = LAND.get(sc.get('land'), '')
    lm = sc.get('landmark') or {}
    if lm.get('type') in LMK: place += f", with {LMK[lm['type']]}"
    parts.append(f"Setting: {place}, {SKY.get(sc.get('sky'), '')}.")
    extra = [x.replace('_', ' ') for x in sc.get('props', [])]
    if extra: parts.append('Details: ' + ', '.join(extra) + '.')
    li = LIGHT.get(sc.get('light', 'none'), '')
    if li: parts.append(li[0].upper() + li[1:] + '.')
    parts.append(f"Mood: {sc.get('mood', 'calm')}.")
    if text: parts.append('Story moment: ' + text.replace('\n', ' '))
    return ' '.join(parts) + ' ' + STYLE

def prompts(path):
    S = json.load(open(path))
    out = [{'key': 'cover', 'prompt': scene_prompt(S, S['cover_scene'], S.get('blurb_en', ''))}]
    for i, p in enumerate(S['a1']):
        out.append({'key': f'p{i}', 'prompt': scene_prompt(S, p['scene'], p['en'])})
    return out

if __name__ == '__main__':
    for f in sys.argv[1:]:
        S = json.load(open(f)); os.makedirs('series/prompts', exist_ok=True)
        o = f"series/prompts/{S['n']:02d}.json"; json.dump(prompts(f), open(o, 'w'), ensure_ascii=False, indent=1); print(o)
