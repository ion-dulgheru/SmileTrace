grammar FrameShield;

policy          : statement* EOF ;

statement       : env_stmt 
                | transport_stmt 
                | csp_stmt 
                | embedding_stmt 
                | trust_stmt 
                | referrer_stmt 
                | cross_origin_stmt
                | perm_stmt 
                | cors_stmt 
                | target_stmt ;

env_stmt        : 'environment' STRING '{' env_prop* '}' ;
env_prop        : 'domain' STRING 
                | 'nonce_mode' IDENTIFIER ;

transport_stmt  : 'transport' '{' trans_prop* '}' ;
trans_prop      : 'enforce_https' BOOLEAN 
                | 'max_age' NUMBER 
                | 'include_subdomains' BOOLEAN 
                | 'preload' BOOLEAN ;

csp_stmt        : 'csp' '{' csp_prop* '}' ;
csp_prop        : 'default' (IDENTIFIER | 'none')  
                | resource_type '{' resource_prop* '}' ;

resource_type   : 'script' | 'style' | 'image' | 'font' | 'frame' | 'connect' | 'media' | 'object' ;
resource_prop   : 'allow' source_val 
                | 'block' IDENTIFIER 
                | 'nonce' IDENTIFIER ;
source_val      : IDENTIFIER | STRING ;

embedding_stmt  : 'embedding' IDENTIFIER ;
trust_stmt      : 'content_trust' IDENTIFIER ;
referrer_stmt   : 'referrer' IDENTIFIER ;
cross_origin_stmt : 'cross_origin_isolation' IDENTIFIER ;
target_stmt     : 'target' IDENTIFIER ;

perm_stmt       : 'permissions' '{' perm_prop* '}' ;
perm_prop       : IDENTIFIER feature_val ;
feature_val     : IDENTIFIER | STRING | 'none' ;

cors_stmt       : 'cors' '{' cors_prop* '}' ;
cors_prop       : 'mode' IDENTIFIER 
                | 'origin' STRING ;

BOOLEAN         : 'true' | 'false' ; 
IDENTIFIER      : [a-zA-Z_][a-zA-Z0-9_-]* ;
STRING          : '"' ~'"'* '"' ;
NUMBER          : [0-9]+ ;
WS              : [ \t\r\n]+ -> skip ;
COMMENT         : '//' ~[\r\n]* -> skip ;
