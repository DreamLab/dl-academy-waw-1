var data = {};
            var users = {};
            var name = '';
            var currentMessages = new Set();
            var currentUsers = new Set();

            function getUsers () {
                $.ajax({
                    type: 'GET',
                    url: '/users',
                    dataType: "JSON",
                    data: data,
                    xhrFields: {
                        withCredentials: false
                    },
                    success: function(data) {
                        $('#users').text('');
                        for(var i=0; i < data.users.length; i++) {
                            currentUsers.add(data.users[i]);
                            console.log(data.users[i]);
                            $('#users').append('<div id="userlistName">'+ data.users[i]+'</div>');
                        }                                                 
                    }
                });
            }

            function showMessages () {
                $.ajax({
                    type: 'GET',
                    url: '/messages',
                    dataType: "JSON",
                    data: data,
                    xhrFields: {
                        withCredentials: false
                    },
                    success: function(data) {
                        for(var i = 0; i < data.messages.length; i++) {
                            if (!currentMessages.has(data.messages[i].id)) {
                                currentMessages.add(data.messages[i].id);
                                $('#messages').append(generateMessage(data.messages[i]));
                            } 
                            var elem = document.getElementById('messages');
                            elem.scrollTop = elem.scrollHeight;                            
                        }                    
                    }
                });
            }
            
            function generateMessage (message) {
                var timestamp = new Date(parseInt(message.timestamp));
                var humanTime = timestamp.toUTCString().slice(0, 22);
                var i = 0;
                return '<div id="' + message.id + '">' +
                    '<div class="messageWrapper">' +
                        '<div class="messageContent">' + 
                            '<div class="username">' + message.username + ':</div>' +
                            '<div class="messageBody" id="messageBody_'  +i++ + '">' + message.body + '</div>' +
                        '</div>' +
                        '<div class="messageTime">' + humanTime + '</div>' +
                    '</div>' +
                '</div>';
            }
            
           function refreshMessages () {
               setTimeout(function() {
                   showMessages();
                   getUsers();
                   refreshMessages();                   
               }, 500);
           }

            function sendMessage (e) {
                e.preventDefault(); 
                var messageBody = $('#messageBody').val();  
                var message = {
                    body: messageBody,
                    username: name
                };             
                $.ajax({
                    type: 'POST',
                    url: '/messages',
                    dataType: 'JSON',
                    data: message,
                    success: function(response) {
                        $('#messageBody').val('');
                    },
                    error: function(response) {
                        console.log(JSON.stringify(response));
                    }
                });
            }            
            
            function login(e) {                
                e.preventDefault();
                name = $('#nameInput').val();
                $.ajax({
                    type: 'POST',
                    url: '/connect',
                    dataType: 'JSON',
                    data: { 'username': name },
                    success: function(response) {
                        $('#nameInput').val('');
                        $('#nameInput').attr('disabled', true);
                        $('#nameSubmit').attr('disabled', true);
                        $('#messageBody').attr('disabled', false);
                        $('#sendButton').attr('disabled', false);
                        $('#logout').attr('disabled', false);
                    },
                    error: function(response) {
                        alert(JSON.stringify(response.responseJSON.error));
                    }
                });
            }

            function logout(e) {
                e.preventDefault();
                $.ajax({
                    type: 'POST',
                    url: '/disconnect',
                    dataType: 'JSON',
                    data: { 'username': name },
                    success: function(response) {
                        $('#nameInput').val('');
                        $('#nameInput').attr('disabled', false);
                        $('#nameSubmit').attr('disabled', false);
                        $('#messageBody').attr('disabled', true);
                        $('#sendButton').attr('disabled', true);
                        $('#logout').attr('disabled', true);
                    },
                    error: function(response) {
                        console.log(JSON.stringify(response));
                    }
                })
            }
            
            refreshMessages();
            $('#nameSubmit').click(login);
            $('#messageForm').submit(sendMessage);
            $('#logout').click(logout);
            $('#messageBody').attr('disabled', true);
            $('#sendButton').attr('disabled', true);
            $('#logout').attr('disabled', true);