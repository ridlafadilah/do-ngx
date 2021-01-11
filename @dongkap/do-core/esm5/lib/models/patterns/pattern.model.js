export var Pattern;
(function (Pattern) {
    Pattern["FULLNAME"] = "(^[a-zA-Z]{1}([.])(?: [a-zA-Z]+)*)?([a-zA-Z ][a-zA-Z]+)*$";
    Pattern["EMAIL"] = ".+@.+..+";
    Pattern["USERNAME"] = "[a-z0-9.]*$";
    Pattern["PHONE_NUMBER"] = "^(([+]([0-9]{1,2}))|([0-9]{1}))([0-9]{2}-?)([0-9]{4}-?)([0-9]{1,6}-?)$";
    Pattern["PASSWORD_MEDIUM"] = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([@$!%*?&]*)[A-Za-z0-9@$!%*?&]{8,}$";
    Pattern["PASSWORD_STRONG"] = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$";
    Pattern["LOCALE"] = "^en-US$|^id-ID$";
})(Pattern || (Pattern = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3BhdHRlcm5zL3BhdHRlcm4ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFOLElBQVksT0FRWDtBQVJELFdBQVksT0FBTztJQUNmLGlGQUFzRSxDQUFBO0lBQ3RFLDZCQUFtQixDQUFBO0lBQ25CLG1DQUF3QixDQUFBO0lBQ3hCLGtHQUF1RixDQUFBO0lBQ3ZGLG9HQUF5RixDQUFBO0lBQ3pGLHVHQUE0RixDQUFBO0lBQzVGLHFDQUEwQixDQUFBO0FBQzlCLENBQUMsRUFSVyxPQUFPLEtBQVAsT0FBTyxRQVFsQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFBhdHRlcm4ge1xuICAgIEZVTExOQU1FID0gJyheW2EtekEtWl17MX0oWy5dKSg/OiBbYS16QS1aXSspKik/KFthLXpBLVogXVthLXpBLVpdKykqJCcsXG4gICAgRU1BSUwgPSAnLitALitcXC4uKycsXG4gICAgVVNFUk5BTUUgPSAnW2EtejAtOS5dKiQnLFxuICAgIFBIT05FX05VTUJFUiA9ICdeKChbK10oWzAtOV17MSwyfSkpfChbMC05XXsxfSkpKFswLTldezJ9LT8pKFswLTldezR9LT8pKFswLTldezEsNn0tPykkJyxcbiAgICBQQVNTV09SRF9NRURJVU0gPSAnXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKShbQCQhJSo/Jl0qKVtBLVphLXowLTlAJCElKj8mXXs4LH0kJyxcbiAgICBQQVNTV09SRF9TVFJPTkcgPSAnXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKSg/PS4qW0AkISUqPyZdKVtBLVphLXowLTlAJCElKj8mXXs4LH0kJyxcbiAgICBMT0NBTEUgPSAnXmVuLVVTJHxeaWQtSUQkJyxcbn1cbiJdfQ==