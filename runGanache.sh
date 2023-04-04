DEV_MEMNONIC=$(grep DEV_MNEMONIC .env.local | cut -d '=' -f 2-)
ganache -m "${DEV_MEMNONIC}"