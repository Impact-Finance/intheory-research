DEV_MEMNONIC=$(grep DEV_MNEMONIC .env | cut -d '=' -f 2-)
ganache -m "${DEV_MEMNONIC}"