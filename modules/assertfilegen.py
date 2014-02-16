url_id = 2 #hardcoded because time

make_assert_url():
    url =  "http://bitbadge.herokuapp.com/badges/" + url_id + ".json"
    #push this address to heroku
    url_id++
    return open(url)

make_assert_file(uid, iden, time, badgeurl):
    asserturl = make_assert_url() 
    string = " { 'uid': "+ uid +", 'recipient': { 'type': 'email', 'hashed': false, 'identity': "+ iden +" }, 'issuedOn': "+ time +", 'badge': "+ badgeurl +", 'verify': { 'type': 'hosted', 'url': "+ asserturl +"} }"
    asserturl.write(string)
