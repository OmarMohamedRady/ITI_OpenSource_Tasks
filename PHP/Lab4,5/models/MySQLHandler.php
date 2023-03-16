<?php

    class MySQLHandler implements DbHandler{

        private $_db_handler;
        private $_table;

        public function __construct($table){
            $this->_table = $table;
            $this->connect();
        }

        public function connect() {
            try{
            $handler = mysqli_connect(__HOST__, __USER__, __PASS__, __DB__);
            if ($handler) {
                $this->_db_handler = $handler;
                return true;
            } else {
                return false;
            }
        }catch(Exception $e){
            die("Something went wrong please come back later");
        }
        }

        public function disconnect() {
            if ($this->_db_handler)
                mysqli_close($this->_db_handler);
        }

        private function get_results($sql) {
            if(__Debug__Mode__ ===1)
                echo "<h5>Sent Query: </h5>" . $sql . "<br/> <br/>";
            $_handler_results = mysqli_query($this->_db_handler, $sql);
            $_arr_results = array();
    
            if ($_handler_results) {
                while ($row = mysqli_fetch_array($_handler_results, MYSQLI_ASSOC)) {
                    $_arr_results[] = array_change_key_case($row);//show 2-d array rows and convert to lowercase character
                }
                // $this->disconnect();
                return $_arr_results;
            } else {
                // $this->disconnect();
                return false;
            }
        }


        public function get_all_records_paginated($fields = array(), $start = 0) {
        $table = $this->_table;
        if (empty($fields)) {
            $sql = "select * from `$table`";
        } else {
            $sql = "select ";
            foreach ($fields as $f) {
                $sql .= " `$f`, ";
            }
            $sql .= "from  `$table` ";
            $sql = str_replace(", from", "from", $sql);
        }
        $sql .= "limit $start," . __RECORDS_PER_PAGE__;
        return $this->get_results($sql);
    }

    public function get_record_by_id($id) {

        

        $table = $this->_table;
        $sql = "select * from `$table` where id = '$id' ";

        return $this->get_results($sql);
    }

    public function get_all_records_Numbers() {
        $table = $this->_table;
        
            $sql = "select count(*) from `$table`";
        
        return $this->get_results($sql);
    }

    public function save($new_values) {
        if (is_array($new_values)) {
            $table = $this->_table;
            $sql1 = "insert into `$table` (";
            $sql2 = " values (";
            foreach ($new_values as $key => $value) {
                $sql1 .= "`$key` ,";
                if (is_numeric($value))
                    $sql2 .= " $value ,";
                else
                    $sql2 .= " '" . $value . "' ,";
            }
            $sql1 = $sql1 . ") ";
            $sql2 = $sql2 . ") ";
            $sql1 = str_replace(",)", ")", $sql1);
            $sql2 = str_replace(",)", ")", $sql2);
            $sql = $sql1 . $sql2;

        
            if (mysqli_query($this->_db_handler, $sql)) {
                $this->disconnect();
                return true;
            } else {
                $this->disconnect();
                return false;
            }
        }
    }


    public function delete($id) {
        $table = $this->_table;
        
        $sql = "delete  from " . $table . " where id = " .$id;
       
        if (mysqli_query($this->_db_handler, $sql)) {
            // $this->disconnect();
            return true;
        } else {
            // $this->disconnect();
            return false;
        }
    }


}